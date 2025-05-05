const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'styles');
const validExtensions = ['.scss'];

// Substituições de mixins
const replacements = {
  '@include onTablet': '@include on-tablet',
  '@include onDesktop': '@include on-desktop',
};

// Função recursiva para percorrer diretórios e corrigir arquivos SCSS
function updateMixinsInFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      updateMixinsInFiles(fullPath);
    } else if (validExtensions.includes(path.extname(file))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let updated = false;

      for (const [oldMixin, newMixin] of Object.entries(replacements)) {
        if (content.includes(oldMixin)) {
          content = content.replace(new RegExp(oldMixin, 'g'), newMixin);
          updated = true;
        }
      }

      if (updated) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✔ Atualizado: ${fullPath}`);
      }
    }
  });
}

console.log('🔧 Corrigindo mixins...');
updateMixinsInFiles(directoryPath);
console.log('✅ Concluído!');
