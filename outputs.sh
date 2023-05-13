declare -a files=('CommonJS/main.js' 'ES6Module/main.mjs' 'Promises/Streams/streams.js' 'Promises/async_await.js' 'Promises/classes.js' 'Promises/promises.js' 'Typescript/index.js' 'classes.js' 'generators.js' 'iterators.js' 'scopes.js')
for i in ${files[@]}
do
	echo -e "Output of $i :"
    node $i
    echo 
done