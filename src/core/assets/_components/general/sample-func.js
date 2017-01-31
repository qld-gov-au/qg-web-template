import kkk from './sample-comp';

export default function (jsonIn) {
    var data = JSON.parse(jsonIn);

    return {
        name: data.Name,
        id: data.PersonalIdentifier
    };
}

