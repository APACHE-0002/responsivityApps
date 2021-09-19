## Media queries

## CSS Units

Unidades de medidas do CSS

Layout Fixo
`px` - pixels

Layout Fluixo
`%` - Porcentagem
`auto` - Automática
`vh` - Viewport Height
`vw` - Viewport Width

Textos fixos
`1px` = 0.75pt/word
`16px` = 12pt

Textos fluidos
`em` - multiplica o valor do componente acima dele
exemplo:  
header nav ul {
  font-size: 14px;
}

header nav ul li {
    //caso seja 2em, sera 28px
  font-size: 1em;
}

`rem` - multiplicado pelo root
62.5% = a cada 1rem que a aplicaçao usar sera passado 10px
html{
    font-size: 62.5%
}
todos pixeis como 28px, se transforma em 2.8rem, porque agora 1rem equivale a 10px redondo, e nao a 16px
