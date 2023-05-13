declare -a files=('CommonJS/main.js' 'ES6Module/main.mjs' 'Promises/Streams/streams.js' 'Promises/async_await.js' 'Promises/classes.js' 'Promises/promises.js' 'Typescript/index.js' 'Basics/classes.js' 'Basics/generators.js' 'Basics/iterators.js' 'Basics/scopes.js')
for i in ${files[@]}
do
	echo -e "Output of $i :"
    node $i
    echo 
done