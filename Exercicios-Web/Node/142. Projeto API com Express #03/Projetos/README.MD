# Instalar Dependencia
Terei que instalar a **Depedência** Body-parser

O `body-parser` é um **módulo** capaz de converter o **body** da **requisição** para vários formatos. Um desses formatos é **json**, exatamente o que queremos.

`npm i --save body-parser` Usamos esse comando no **terminal** para instalar a **dependencia** no **package.json**.
Vai pegar os Dados corretos para que a gente possa trabalhar com a **Requisição**. O **Body** da requisição está vindo correto, mas do lado do **servidor** eu preciso canalizar aquilo que veio do **body** e transformar em um **objeto**.

O `app.use(bodyParser.urlencoded({ extended: true }))` ira fazer um **parse**, esse `urlencoded` é exatamente o padrão que escolhi no **Postman**
