type Currencies = {
    usa: "usd";
    china?: "cny";
    ukraine: "uah";
    readonly kz: "tenge";
};

// Generic который будет заниматься модификацией типов
type CreateCustomCurr<T> = {
    // значение только для чтения (readonly)
    // - и тернарный оператор (?) для удаление модификатор
    -readonly [P in keyof T]-?: string;
    // + и тернарный оператор (?) для добавление модификаторов
    // +readonly [P in keyof T]+?: string;
};

// Создаем копию Currencies (где каждое значение(property) является string)
type CustomCurrencies = CreateCustomCurr<Currencies>;

// Делаем каждое свойство неизменяемым при помощи свойства Readonly
type ROnlyCurr = Readonly<Currencies>;

// type CustomCurrencies = {
//     usa: string;
//     china: string;
//     ukraine: string;
//     kz: string;
// };

// type СопоставимыйТип = {
//     [произвольныйИдентификатор in Множество]: ПроизвольныйТипДанных;
// };

type Keys = "name" | "age" | "role";

type User = {
    // Произвольный идентификатор К
    [K in Keys]: string; // Назначаем каждому отдельному свойству тип данных string
};

const alex: User = {
    name: "Alex",
    age: "25",
    role: "admin",
};
