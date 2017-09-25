const president = (function () {
  const _presidentsPrivateInformation = 'Super private';
  const _name = 'Turd Sandwich';

  const getName = () => _name;

  return {
    getName
  };
}());


president.getName();    // => 'Turd Sandwich'
president._name;    // => undefined
president._presidentsPrivateInformation;    // => undefined