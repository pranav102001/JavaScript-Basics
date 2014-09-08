/**
 * Created by Venko on 7/24/2014.
 */
function variablesTypes(info){
    var object = {
        name:info[0],
        age:info[1],
        isMale:info[2],
        foods:info[3]
    };
    console.log("My name: "+ object.name + " //type is: " + typeof(object.name));
    console.log("My age: "+ object.age + " //type is: " + typeof(object.age));
    console.log("I am male: "+ object.isMale + " //type is: " + typeof(object.isMale));
    console.log("My favourite foods are: "+ object.foods + " //type is: " + typeof(object.foods));

}
variablesTypes((['Pesho', 22, true, ['fries', 'banana', 'cake']]));