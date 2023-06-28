# SmartHome

Projeto para apresentação de SmartHome, criado na discplina de Computação Móvel

Documentação para preparação do ambiente de desenvolvimento https://react-native.rocketseat.dev/

Preparação do protótipo ([Figma](https://www.figma.com/file/TTOVVM569X1bVyXSLlxxDh/Smart-Home-(Community)?type=design))

1. Criar projeto no GitHub
  - Novo repositório

2. Clonar projeto no repositório local
  - Git clone <link do projeto>

2. Criar projeto React Native
```
  - npx create-expo-app meusresultados --template
```

3. Executar projeto (web)
* Para executar o projeto é necessário instalar as dependências que ele necessita
```
npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
```
* Executar o projeto (dependendo do destino pode ser usado um destes comandos)
```
  npm run web
  npm run android
  npm run ios
```

4. Componentes
  - 4.1. [Text](https://reactnative.dev/docs/text)
  - 4.2. [View](https://reactnative.dev/docs/view)
  - 4.3. [TextInput](https://reactnative.dev/docs/textinput)
  - 4.4. [TouchableOpacity](https://reactnative.dev/docs/touchableopacity)

5. Estilização com [StyleSheet](https://reactnative.dev/docs/stylesheet)

6. Navegação com ([navigation](https://reactnavigation.org/))
```
  npm install @react-navigation/native
```
```
  npm install react-native-screens react-native-safe-area-context 
```
```
  npm install @react-navigation/native-stack 
```
6. react-native-animatable
```
  npm install react-native-animatable  
```
7. Usando o Firebase
```
  npx expo install firebase  
```
8. Documentação Firebase [Firebase](https://firebase.google.com/docs/web/setup?hl=pt-br#register-app)



