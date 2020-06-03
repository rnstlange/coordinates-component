# Coordinate component

Установка:

```bash
npm i @rnstlange/coordinates-component
```

Использование:

```js
import CC from '@rnstlange/coordinates-component'
import '@rnstlange/coordinates-component/style.css'

const cc = new CC({
	target: document.body,
	props: {
		multiple: true, // Несколько координат
		multitool: false, // Переключение между линией и полигоном
		bufferization: true // Буферизация
	}
})
```

Подписаться на изменения:

```js
cc.$on('change', ({ detail: { coordinates, buffer, shape } }) =>
	onChange({
		coordinates, // Массив координат, EPSG:3857, DD
		buffer: buffer * 2, // Буфер (почему-то * 2)
		shape // Линия / полигон
	})
)
```

Передавать изменения:

```js
cc.$set({
	coordinate: position, // Позиция курсора
	coordinates // Массив координат
})
```
