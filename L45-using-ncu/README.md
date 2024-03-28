# ncu (npm-check-updates)
              
> npm-check-updates upgrades your `package.json` dependencies to the latest versions, ignoring specified versions.                                    

### how to install?
```shell
npm install -g npm-check-updates
```
https://www.npmjs.com/package/npm-check-updates     

----
### other info and commands:

```shell
npm outdated
```

https://docs.npmjs.com/cli/v10/commands/npm-outdated

```shell
npm update
```
https://docs.npmjs.com/cli/v10/commands/npm-update

---

`^` Caret  
`~` Tilde  

infos:

https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies

https://github.com/npm/node-semver?tab=readme-ov-file#advanced-range-syntax
                 

### `ncu` useful commands:
                                     
- interactive mode
```shell
ncu -i
```

- format results by Major/Minor/Patch
```shell
ncu --fromat group
```
      
- update `package.json` entries:
```shell
ncu -u
```
