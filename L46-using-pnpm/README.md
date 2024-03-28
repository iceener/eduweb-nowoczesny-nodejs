# pnpm
                
> Fast, disk space efficient package manager

See more:
                      
- https://pnpm.io/
- install: https://pnpm.io/installation
           

Fast install:

```shell
npm i -g pnpm
```
 
## Remember to not use both (npm + pnpm) or (yarn + pnpm) 
> that might cause problems with lib versions (different `.lock` files data)

    
- install project
```shell
pnpm i
```
                    
- example, install global lib:
```shell
pnpm i -g typescript
```
