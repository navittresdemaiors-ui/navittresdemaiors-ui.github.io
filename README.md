# navittresdemaiors-ui.github.io

O Navit atua desde 2017 com o trabalho de apoio emocional gratuito, rodas de conversa, palestras e promoção da campanha do Setembro Amarelo e do comitê municipal de Prevenção do suicídio em Três de Maio e região. Mantém grupos de apoio para enlutados e está sempre em busca de uma sociedade mais solidária, empática e fraterna. venha ser voluntário. 

## 🌟 Melhorias de Acessibilidade

Este site foi otimizado para garantir acessibilidade e usabilidade para todos os usuários:

- ✅ Navegação por teclado aprimorada com foco visível
- ✅ Contraste de cores adequado (WCAG AA)
- ✅ Estrutura semântica com landmarks e ARIA labels
- ✅ Skip link para conteúdo principal
- ✅ Hierarquia de títulos apropriada

## 🚀 Lighthouse CI

Este repositório utiliza o GitHub Actions para executar auditorias automáticas de qualidade com Lighthouse em cada push para a branch `main`.

### O que é verificado

- **Performance**: ≥ 90%
- **Acessibilidade**: ≥ 90%
- **Melhores Práticas**: ≥ 80%
- **SEO**: ≥ 90%

### Como executar Lighthouse localmente

Para verificar a qualidade do site em seu ambiente local:

```bash
# Instalar Lighthouse CLI
npm install -g lighthouse

# Executar auditoria contra o site publicado
lighthouse https://navittresdemaiors-ui.github.io/ --view

# Ou executar com Lighthouse CI
npm install -g @lhci/cli
lhci autorun --collect.url=https://navittresdemaiors-ui.github.io/
```

### Visualizar relatórios no GitHub Actions

1. Acesse a aba **Actions** no repositório
2. Selecione o workflow **Lighthouse CI**
3. Clique em uma execução específica
4. Baixe os artefatos **lighthouse-reports** para ver os relatórios detalhados

## 🧪 Testes de Acessibilidade Locais

Você também pode usar ferramentas adicionais para validar acessibilidade:

```bash
# Instalar pa11y para testes de acessibilidade
npm install -g pa11y

# Executar análise de acessibilidade
pa11y https://navittresdemaiors-ui.github.io/
```

## 📞 Contato

Para mais informações sobre os grupos de apoio e como participar, visite [https://navittresdemaiors-ui.github.io/](https://navittresdemaiors-ui.github.io/)

