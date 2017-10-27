# React 16 VS React 15

![image](https://user-images.githubusercontent.com/10692276/32041888-845e0660-ba81-11e7-9100-d7518c041881.png)

Fiber splitting the originally sync reconciliation step to units of work, which is more responsive.   
From the performance point of view, the new algorithm is better(such as won't generate a huge call stack).
![image](https://user-images.githubusercontent.com/10692276/32083883-b30bb67a-bb11-11e7-9193-3b6b8f995089.png)


To test React 16,
```
// Or npm install
yarn install
yarn start
```
To test React 15 in the same time, you need copy the directory, search `8000` and change it to something like 8001
```
npm i react@15 react-dom@16
npm start
```
Sorry for this inconvenience
