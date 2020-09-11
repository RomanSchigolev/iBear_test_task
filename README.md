# ibear_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

# Тестовое задание iBear.Frontend

### Описание

Создать с помощью фреймворка Vue одностраничное приложение по предложенному макету. Разрешается использовать css-фреймворки (прим. vuetify, bootstrap), но не обязательно. Контент для виджета погоды использовать из приложения.

### Что мы ожидаем увидеть
Создайте навигацию в приложении с помощью vue-router.

На странице dashboard будут расположены виджеты с погодой и транзакциями.
Источником данных для виджета транзакций будет служить store (хранилище).

На странице transactions будут расположены виджеты добавления транзакции и отображения списка. При нажатии на кнопку “+” (добавить) объект с данными из input добавится в хранилище. Источником данных для виджета транзакций будет служить тот самый store (хранилище).

### Обязательное использование
* vue-router - https://router.vuejs.org
* vuex - https://vuex.vuejs.org

Выложить в репозиторий (github, gitlab) весь проект для последующей сборки.

### При оценке внимание будет обращено на

* архитектуру компонентов (разбиение верстки на компоненты)
* структуру проекта
* качество кода
* использование элементов css-фреймворков (если будет использовано)

Ссылка на макет и примеры Json объектов в приложении

## Приложение
### Ссылка на макет:
https://www.figma.com/file/Az2rJruE9yNBBILPA4dRWm/iBear.Frontend-test-case-(Copy)

### JSON для погоды:
```
{
	"weather": {
		"main": "Drizzle",
		"description": "light intensity drizzle",
	},
	"main": {
		"temp": 18,
		"pressure": 760,
		"humidity": 81,
	},
	"wind": {
		"speed": 4.1,
	},
	"updated": 1485789600,
	"country": "GB",
	"name": "London"
}
```
