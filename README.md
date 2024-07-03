Filmopoisk

Функциональные требования:

Шапка:

* [+] Позиционируется липко (стики);

Авторизация:

* [-] Для реализации модального окна используется портал;
* [-] После успешной авторизации кнопка «Войти» меняется на заглушку иконки пользователя и кнопку «Выйти»;
    * [-]Сохраняем авторизационный токен из ответа ручки бэка /login (например, в localStorage);
    * [-]С токеном стоит работать через thunk;
    * [-]По клику на кнопку «Выйти» удаляем токен и снимаем авторизацию;
    * [-]При инициализации приложения проверяем авторизационный токен;

Реализована страница списка фильмов:

* Поиск:
    * [-]Поиск происходит во время ввода пользователем символов. Дёргаем ручку /search;
* Фильтры:
    * [-]Реализованы фильтры с dropdown;
* Фильтры сохраняются в query-params;
    * [+-]Реализован список фильмов с пагинацией;

Страница фильма:

* Реализована работа с получением данных:
    * [+]Дёргаем ручку /movie:id;
    * [+]Соответствующие данные отрисованы;
* Возможность поставить оценку:
    * [-]Оценку для фильма достаём из ручки /movie/:id;
    * [-]Если пользователь авторизован, даём возможность поставить оценку — запрос мутации;
    * [-]После выставления оценки обновляем кеш запроса /movie/:id;

Общий функционал:

* [-]Реализовать единообразную обработку ошибок для запросов;
* [-]Реализован лоадер;
* [-]Используем debounce для поиска фильма и выставления оценки;

Стор:

* [+]Используется rtk и rtk-query;
* [+]Данные корректно разбиты на модули (пример — авторизация, searchParams из фильтров);
* [+-]Селекторы написаны оптимально (нет переизбытка дублирования);

---
Миграция на Next:

* [-]Реализована миграция с использованием SSR;
* [-]Для картинок используется Image некста. Скрины фильма, которые вне вьюпорта грузятся лениво;
* [-]Страница фильма реализована с помощью Dynamic Routes
