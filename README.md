# 🏆 Panini FIFA World Cup 2026 — Controle de Figurinhas

App para controlar figurinhas faltantes com **login Google** e **sincronização em tempo real** entre dispositivos.

**Stack:** React + Vite · Firebase Auth + Firestore · Deploy no Vercel

---

## Configuração (passo a passo)

### 1. Criar projeto Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Clique em **"Adicionar projeto"** → dê um nome (ex: `panini-2026`)
3. Pode desativar o Google Analytics (opcional)

### 2. Ativar autenticação Google

1. No menu lateral: **Authentication → Primeiros passos**
2. Aba **"Método de login"** → **Google** → Ativar
3. Informe um e-mail de suporte → Salvar

### 3. Criar banco Firestore

1. No menu lateral: **Firestore Database → Criar banco de dados**
2. Escolha **"Iniciar no modo de produção"**
3. Selecione a região **`southamerica-east1`** (São Paulo) → Ativar

4. Vá em **Regras** e cole estas regras de segurança:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /albums/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Clique em **Publicar**.

### 4. Obter credenciais do Firebase

1. No menu lateral: **⚙️ Configurações do projeto → Geral**
2. Role até **"Seus aplicativos"** → clique em **`</>`** (Web)
3. Registre o app com um apelido (ex: `panini-web`) → **Registrar**
4. Copie o objeto `firebaseConfig` que aparecer

### 5. Configurar variáveis de ambiente

Copie o arquivo de exemplo e preencha com suas credenciais:

```bash
cp .env.example .env.local
```

Edite `.env.local`:

```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=panini-2026.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=panini-2026
VITE_FIREBASE_STORAGE_BUCKET=panini-2026.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

### 6. Rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173)

---

## Deploy no Vercel

### 1. Subir para o GitHub

```bash
git init
git add .
git commit -m "feat: panini tracker com Firebase"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/panini-world-cup-2026.git
git push -u origin main
```

### 2. Conectar ao Vercel

1. Acesse [vercel.com](https://vercel.com) → **"Add New Project"**
2. Importe o repositório do GitHub
3. Framework: **Vite** (detectado automaticamente)
4. Em **"Environment Variables"**, adicione todas as variáveis do `.env.example` com seus valores reais

### 3. Autorizar domínio no Firebase

Após o deploy, o Vercel gera uma URL (ex: `panini-2026.vercel.app`).

1. No Firebase: **Authentication → Settings → Domínios autorizados**
2. Clique em **"Adicionar domínio"** → cole sua URL do Vercel
3. Salve

Pronto! A partir daí, todo `git push` faz deploy automático. ✅

---

## Estrutura do projeto

```
panini-2026/
├── src/
│   ├── components/
│   │   ├── LoginScreen.jsx   # Tela de login Google
│   │   └── SyncBadge.jsx     # Indicador de sincronização
│   ├── hooks/
│   │   └── useStickers.js    # Lógica Firebase (leitura/escrita)
│   ├── albumData.js          # Dados de todas as figurinhas
│   ├── firebase.js           # Configuração Firebase
│   ├── App.jsx               # App principal
│   ├── main.jsx              # Entry point + auth listener
│   └── styles.css            # Estilos
├── .env.example              # Template de variáveis
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Como funciona a sincronização

- Cada usuário tem um documento em `albums/{uid}` no Firestore
- Ao marcar/desmarcar uma figurinha, a mudança é salva no Firestore com **debounce de 800ms** (agrupa várias mudanças rápidas em uma só escrita)
- O Firestore usa **listener em tempo real** (`onSnapshot`), então dois dispositivos abertos simultaneamente ficam sincronizados automaticamente
- Os dados do usuário são **privados**: as regras de segurança garantem que cada um acessa apenas os próprios dados
