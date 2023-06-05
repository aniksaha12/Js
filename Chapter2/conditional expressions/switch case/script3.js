const x = "Apples";
switch (x) {
    case 'Bananas':
        console.log('Bananas are $20 per pound');
        break;
    case 'Mangoes':
    case 'Apples' :
        console.log('Mangoes and Apples are $50 per pound');
        break;
    default:
        console.log(`Sorry, We are out of ${x}`)
}