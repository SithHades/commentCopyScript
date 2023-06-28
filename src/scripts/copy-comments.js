const fs = require('fs-extra');
const glob = require('glob');

async function copyComments() {
  const typesFile = './src/types.d.ts';
  const commandFiles = glob.sync('./src/commands/*.ts');

  // Extract comments and function names from types.d.ts
  const typesContent = await fs.readFile(typesFile, 'utf8');
  const typesRegex = /\/\*\*([\s\S]*?)\*\/\s*(\w+)\(\)/g; // updated regex
  let match;
  const comments = {};
  while ((match = typesRegex.exec(typesContent))) {
    comments[match[2]] = match[1].trim(); // updated capture group
  }

  /*   console.log(
    'Found comments for',
    Object.keys(comments).length,
    'functions'
  );
  console.log(comments); */

  // Insert comments into command files

  for (const file of commandFiles) {
    let content = await fs.readFile(file, 'utf8');
    for (const [func, comment] of Object.entries(comments)) {
      const funcRegex = new RegExp(
        `(Cypress\\.Commands\\.add\\('${func}',\\s*\\(\\)\\s*=>\\s*\\{)`
      );
      content = content.replace(funcRegex, (match, p1) => {
        return `/**\n${comment}\n*/\n${p1}`;
      });
    }
    await fs.writeFile(file, content, 'utf8');
  }
}

copyComments().catch(console.error);
