# Projeto de estudos em Deno

API criada em Deno para estudar o que há de melhor e mais novo em backend.

## Bibliotecas de pacotes

Diferente do Node onde utilizamos bibliotecas instaladas no projeto através do
NPM, no Deno as bibliotecas são utilizadas através de CDN como o
[Deno Land (Oficial)](https://deno.land/x) e/ou o
[ESM (Indicação Oficial)](https://esm.sh)

## Estrutura do Projeto

O projeto segue alguns padrões da Arquitetura Limpa (Clean Architecture).

```bash
root/src/
├── adapters/
├── controllers/
├── core/
|  ├── entities/
|  ├── repositories/
|  └── use-cases/
├── infra/
|  ├── database/
|  |  └── repositories/
|  └── http/
|     ├── middlewares/
|     └── routes/
└── utils/
└── main.ts
```
