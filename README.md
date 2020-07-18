## Começando

Na sua máquina, você precisa ter [nodejs](https://nodejs.org/en/), [yarn](https://yarnpkg.com/pt-BR/docs/install#debian-stable), [Python2](https://www.python.org), [jdk8](https://www.oracle.com/br/java/technologies/javase/javase-jdk8-downloads.html) e [Android-Studio](https://developer.android.com/studio) para conseguir instalar as dependencias do projeto e executar os comandos. Se você já tem eles instalados, comece instalando o react native cli 

```js
npm install -g react-native-cli
```

e depois as dependencias:

```js
yarn install
```

Para comecar a testar, basta conectar um telefone android com a depuração USB ativado ou usar o emulador do android studio e executar o comando:

```
npx react-native run-android
```