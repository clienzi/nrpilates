# Plano de implementação — NR Pilates Fisioterapia e Estética

## Escopo aprovado

Criar uma landing page responsiva em português do Brasil para a NR Pilates Fisioterapia e Estética, com foco em converter visitantes em conversas no WhatsApp para agendamento de aula experimental. A página terá navegação por seções para Pilates, Fisioterapia, Aula experimental, Avaliações do Google, Endereço/mapa e Sobre, além de botões flutuantes para WhatsApp e Instagram.

Dados públicos confirmados na ficha do Google Maps:
- Nome: NR Pilates Fisioterapia e Estética
- Localização: Ouro Fino / Pouso Alegre, Ribeirão Pires — SP
- Endereço: entrada pela viela — R. Japira, 159 - Pouso Alegre, Ribeirão Pires - SP, 09440-260
- Telefone: +55 11 95448-8396
- Nota: 5,0 com 11 avaliações
- CREFITO: Dra. Bianca Neiva | CREFITO-3/299049-F
- Instagram: https://www.instagram.com/nr_pilatesefisioterapia/

## Direção visual

- **Movimento:** quiet luxury de bem-estar, com editorial de saúde feminina e detalhes biofílicos.
- **Princípios:** acolhedor sem ser infantil; sofisticado sem ser distante; claro e funcional; centrado em confiança e cuidado individual.
- **Paleta:** marfim e areia para transmitir calma; verde profundo para ancorar credibilidade e conexão natural; rosé-terra para humanizar os CTAs; dourado suave para pequenos acentos premium.
- **Layout:** composição editorial assimétrica, com hero dividido entre narrativa e cartão de agendamento; seções respiradas e alternância de blocos claros/escuros em vez de uma grade rígida.
- **Elementos assinatura:** linhas finas inspiradas no traço da logo; cartões com cantos arredondados e sombras suaves; pequenos marcadores circulares em verde/rosé.
- **Interação:** navegação por âncoras com rolagem suave, CTAs sempre visíveis e microinterações discretas que reforçam a sensação de leveza.
- **Animação:** entrada suave por opacidade e deslocamento; hover curto nos botões; sem movimento excessivo ou elementos que dificultem a leitura.
- **Tipografia:** Cormorant Garamond para títulos e Manrope para interface, texto e CTAs. Hierarquia com títulos elegantes, corpo arejado e labels em caixa alta espaçada.
- **Essência da marca:** Pilates e fisioterapia próximos, cuidadosos e personalizados para quem quer se movimentar melhor e viver com mais bem-estar.
- **Personalidade:** acolhedora, elegante, atenta.
- **Voz:** direta, humana e segura. Exemplos: “Seu corpo merece cuidado com intenção.” e “Vamos encontrar o melhor ritmo para você?”
- **Logo:** utilizar a marca fornecida pela cliente como elemento principal, com tratamento em moldura orgânica e bastante respiro visual.
- **Cor proprietária:** verde NR `#234d43`, usado em fundos de confiança e na navegação.

## Implementação

- Site estático sem backend ou banco, servido por um pequeno servidor Node para o Preview e compatível com deploy estático na Vercel.
- `index.html` contém todas as seções e metadados SEO básicos.
- `styles.css` concentra o sistema visual, responsividade e estados de interação.
- `script.js` controla menu mobile, ano do rodapé e estado ativo da navegação.
- `public/logo.png` guarda a logo fornecida; a galeria usa fotos públicas já visíveis na ficha do Google como placeholders de primeira versão, prontas para substituição pelas fotos que a cliente enviar.
- `public/manus-routes.json` declara a rota única `/` para o Preview e publicação.
- `server.js` serve os arquivos estáticos em `0.0.0.0:3000`.
- `vercel.json` mantém a entrega como site estático com URLs limpas.

## Integrações e conversão

- WhatsApp com mensagem pré-preenchida para aula experimental em todos os CTAs principais.
- Instagram no header, rodapé e botão flutuante.
- Mapa incorporado pela URL pública do Google Maps, sem exigir chave de API.
- Avaliações exibidas com nota agregada e destaques legíveis, vinculadas à ficha pública.
