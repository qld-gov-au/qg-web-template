import kkk from '../test-comp';

export default function (jsonIn){
    var data = JSON.parse(jsonIn);

    return {
        name: data.Name,
        id: data.PersonalIdentifier
    };
}

