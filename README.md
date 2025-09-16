# Workshop 2 Library

Бібліотека для демонстрації базових та складних можливостей TypeScript: функції, типи, класи, робота з `.env`, логування.

## Інструкції з запуску

1. Встановити залежності:
```bash
npm install
````

2. Запустити демо:

```bash
npm run demo

> workshop_2@2.0.0 demo
> tsx src/demo.ts

[dotenv@17.2.2] injecting env (2) from .env -- tip: 📡 auto-backup env with Radar: https://dotenvx.com/radar
sum(2.0 ok): 9
capitalize(typed): Hello
format(ok): 123.456
[INFO] Application started
[DEBUG] Extra debug info
```



3. Зібрати бібліотеку:

```bash
npm run build

> workshop_2@2.0.0 build
> tsup src/index.ts --format cjs,esm --dts

CLI Building entry: src/index.ts
CLI Using tsconfig: tsconfig.json
CLI tsup v8.5.0
CLI Target: esnext
CJS Build start
ESM Build start
CJS dist/index.cjs 2.66 KB
CJS ⚡️ Build success in 13ms
ESM dist/index.js 967.00 B
ESM ⚡️ Build success in 13ms
DTS Build start
DTS ⚡️ Build success in 606ms
DTS dist/index.d.cts 532.00 B
DTS dist/index.d.ts  532.00 B
```


## Еволюція бібліотеки

| Версія | Зміни                                                                               |
| ------ | ----------------------------------------------------------------------------------- |
| 0.1.0  | Простi функції з `any`.                                                             |
| 0.2.0  | Функції з базовими типами.                                                          |
| 0.3.0  | Додано складний тип `NumberFormatOptions` і `formatNumber`.                         |
| 0.4.0  | Інтерфейси, функція `groupBy<T>`.                                                   |
| 0.5.0  | Клас `Logger`, `.env` з `zod`, `formatNumber` використовує `APP_PRECISION`.         |
| 1.0.0  | Стабілізація API, збірка, ESLint.                                                   |
| 2.0.0  | Breaking change: `add` приймає масив `number[]`, демо показує виправлення викликів. |

## Приклади використання

```ts
import { add, capitalize, formatNumber, Logger } from './index.js';

// Add
console.log(add([1, 2, 3])); // 6

// Capitalize
console.log(capitalize('hello')); // "Hello"

// Format number
console.log(formatNumber(123.456, { precision: 2 })); // "123.46"

// Logger
const logger = new Logger('debug');
logger.info('This is info');   // [INFO] This is info
logger.debug('Debug message'); // [DEBUG] Debug message
```

## .env

Бібліотека очікує `.env` у корені проекту з ключем:

```
APP_PRECISION=3
LOG_LEVEL=debug
```

Це використовується у `formatNumber` для точності чисел за замовчуванням.

## Релізи

* [v0.1.0](https://github.com/ni-cookie/workshop_2/releases/tag/v0.1.0)
* [v0.2.0](https://github.com/ni-cookie/workshop_2/releases/tag/v0.2.0)
* [v0.3.0](https://github.com/ni-cookie/workshop_2/releases/tag/v0.3.0)
* [v0.4.0](https://github.com/ni-cookie/workshop_2/releases/tag/v0.4.0)
* [v0.5.0](https://github.com/ni-cookie/workshop_2/releases/tag/v0.5.0)
* [v1.0.0](https://github.com/ni-cookie/workshop_2/releases/tag/v1.0.0)
* [v2.0.0](https://github.com/ni-cookie/workshop_2/releases/tag/v2.0.0)

