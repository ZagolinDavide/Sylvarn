Ambientazione custom D&D

# Scarica pacchetti
npm i

# Installa Quartz senza global, usa npx
npx quartz init

# Build del sito
npx quartz build

# Visualizzare il sito in locale
npx quartz build --serve

# Sincronizzazione / deploy su GitHub
npx quartz sync
npx quartz sync --no-pull

# Pulizia della build
npx quartz clean

# Pulizia / backup
npx quartz backup

# Gestione plugin
// Aggiungere un plugin: crea un file .ts nella cartella plugins/ e registra in quartz.config.ts
import { MyPlugin } from "./plugins/myPlugin";
export const QuartzConfig = {
  plugins: [MyPlugin],
};