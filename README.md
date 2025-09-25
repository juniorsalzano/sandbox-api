<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
</p>

<h1 align="center">Sandbox API</h1>
<p align="center">
  <b>API para testes com Kubernetes, CI/CD e integrações.</b><br>
  <i>Desenvolvido por <a href="https://github.com/juniorsalzano" target="_blank">Junior Salzano</a></i>
</p>

---

## Sobre o projeto

A Sandbox API é uma aplicação backend construída com [NestJS](https://nestjs.com/) e Node.js, criada para facilitar testes em ambientes de orquestração (Kubernetes), pipelines CI/CD, integrações e experimentos de arquitetura. Ideal para desenvolvedores que desejam validar cenários reais de deploy, escalabilidade e automação.

## Features

- Estrutura modular com NestJS
- Endpoints REST para testes e integração
- Pronto para deploy em Docker/Kubernetes
- Scripts para automação de build e testes
- Base para experimentos com autenticação, logs, métricas, etc.

## Tecnologias

- [NestJS](https://nestjs.com/)
- Node.js >= 18.x
- TypeScript
- Docker/Kubernetes (opcional)
- pnpm (ou npm/yarn)

## Instalação

```bash
pnpm install
```

## Como executar

```bash
# Desenvolvimento
pnpm run start

# Modo watch
pnpm run start:dev

# Produção
pnpm run start:prod
```

## Testes

```bash
# Testes unitários
pnpm run test

# Testes e2e
pnpm run test:e2e

# Cobertura de testes
pnpm run test:cov
```

## Deploy com Docker/Kubernetes

```bash
# Build da imagem Docker
docker build -t sandbox-api:latest .

# Deploy no Kubernetes (exemplo)
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```
> Adapte os manifests conforme seu ambiente.

## Recursos úteis

- [Documentação NestJS](https://docs.nestjs.com)
- [Documentação Kubernetes](https://kubernetes.io/docs/)
- [Devtools NestJS](https://devtools.nestjs.com)

## Autor

Desenvolvido por **Junior Salzano**  
[GitHub](https://github.com/juniorsalzano) | [LinkedIn](https://www.linkedin.com/in/juniorsalzano/)

## Licença

MIT
Adapte os arquivos conforme seu ambiente.

<!-- Sugestão para o campo Description do GitHub: -->
Sandbox API para testes com Kubernetes, CI/CD, integrações e experimentos backend. Desenvolvido com NestJS e Node.js.
- [Documentação NestJS](https://docs.nestjs.com)
- [Documentação Kubernetes](https://kubernetes.io/docs/)
- [Devtools NestJS](https://devtools.nestjs.com)
- [Jobs NestJS](https://jobs.nestjs.com)

## Autor

- Junior Salzano - [GitHub](https://github.com/juniorsalzano)

## Licença

MIT
