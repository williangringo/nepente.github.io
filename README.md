# Como gerar o site

## Pré requisitos

* Rake (Dica: `gem install rake`)
* Bundler (Dica: `gem install bundler`)

## Passo-a-passo

#### Certifique que está no branch `source`

```
git checkout source
```

#### Instale as dependências

```
bundle
```

#### Gere o site

```
rake
```

*Para visualizar as alterações inicie um servidor http no diretório _site*

#### Publique o site

Antes de publicar o site certifique-se de que todas as alterações estejam *comitadas* e sincronizadas com o branch `source` do GitHub

```
rake publish
```

*Fique atento pois será solicitado usuário e senha para realizar a publicação.*

*Só é possível publicar caso você possua permissão de escrita no repositório*
