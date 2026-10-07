# Тестовое задание: Progmatic Lab

[![CI](https://github.com/Bertruchio/progmatic-test/actions/workflows/ci.yml/badge.svg)](https://github.com/Bertruchio/progmatic-test/actions)

Решение задачи по расстановке математических знаков между цифрами `9876543210` для получения суммы 200. 

👉 **[Посмотреть демо в браузере (GitHub Pages)](https://Bertruchio.github.io/progmatic-test/frontend/)**

## Запуск проекта локально

Клонируйте репозиторий и перейдите в папку проекта.

### Frontend (JavaScript)

Интерфейс работает без локального сервера — откройте `frontend/index.html` в любом браузере.

Для запуска тестов (Jest):
```bash
cd frontend
npm install
npm test
```

### Backend (Python)

Запуск алгоритма в консоли:
```bash
cd python
py solver.py 
# На Linux/macOS используйте python3
```

Запуск тестов (Pytest):
```bash
cd python
py -m pip install -r requirements.txt
py -m pytest
```

## Технические детали

* Решение написано на JS и Python, чтобы охватить фронтенд и бэкенд стек вакансии.
* JS-код намеренно не использует ES-модули (`type="module"`). Это позволяет проверяющему запустить `index.html` прямо из файловой системы, не сталкиваясь с CORS-ограничениями браузера.
* При пуше в ветку `main` GitHub Actions автоматически прогоняет тесты для обоих языков.