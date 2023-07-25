# Projeto de estudos em Deno

API criada em Deno para estudar o que há de melhor e mais novo em backend.

## Bibliotecas de pacotes

Diferente do Node onde utilizamos bibliotecas instaladas no projeto através do
NPM, no Deno as bibliotecas são utilizadas através de CDN como o
[Deno Land (Oficial)](https://deno.land/x) e/ou o
[ESM (Indicação Oficial)](https://esm.sh)

## Pacotes utilizados

Algumas bibliotecas foram utilizadas no projetos, como mostra a lista abaixo

- [Oak (v12)](https://deno.land/x/oak) Faz praticamente o mesmo trabalho do
  Express com o NodeJS

## Estrutura do Projeto

O projeto segue alguns padrões da Arquitetura Limpa (Clean Architecture).

```bash
root/src/
├── core/
|  ├── entities/
|  ├── repositories/
|  └── use-cases/
├── adapters/
├── controllers/
├── infra/
|  ├── database/
|  |  ├── db.ts
|  |  └── repositories/
|  |     ├── memory/
|  |     └── sql/
|  └── http/
|     ├── app.ts
|     ├── middlewares/
|     └── routes/
└── utils/
└── main.ts
```
