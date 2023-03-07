import { readFileSync, existsSync, writeFileSync } from 'fs'

const file = readFileSync('./src/global.d.ts', { encoding: 'utf-8' })

const matches = file.matchAll(/_([a-zA-Z]+)(<(.*)>)?\((.*)\):(.*$)/gm)

for (const [, methodName, , generics, params, returnType] of matches) {
    const filePath = `./src/functions/_${methodName}/index.ts`
    if (existsSync(filePath)) {
        continue
    }
    writeFileSync(
        filePath,
        `
Array.prototype._${methodName} = function<T${generics ? `, ${generics}` : ''}> (this${params ? `, ${params}` : ''})${returnType ? `:${returnType}` : ''} {
    throw new Error('Not implemented')
}
    `,
        {
            flag: 'w+',
        }
    )
    console.log(`File ${filePath} created successfully.`)
}
