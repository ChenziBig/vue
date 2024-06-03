// 定义一个接口，用于限制Person对象的具体属性
export interface PersonInterface {
  id: number;
  name: string;
  age: number;
}

//  定义一个自定义类型
export type Persons = Array<PersonInterface>;
