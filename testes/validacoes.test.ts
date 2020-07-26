import validacoes from '../src/services/Validacoes'
test('isCPF', () => {
  expect(validacoes.isCPF('36801792865')).toBeTruthy();
  expect(validacoes.isCPF('368.017.928-65')).toBeFalsy();
  expect(validacoes.isCPF('11111111111')).toBeFalsy();
  expect(validacoes.isCPF('123')).toBeFalsy();
  expect(validacoes.isCPF('22222222222')).toBeFalsy();
});

test('menor18Anos', () => {
  expect(validacoes.maior18Anos(new Date('2002-07-24'))).toBeTruthy();
  expect(validacoes.maior18Anos(new Date('2002-07-25'))).toBeTruthy();
  expect(validacoes.maior18Anos(new Date('2002-07-26'))).toBeFalsy();
});

test('isEmail', () => {
  expect(validacoes.isEmail('rsmonte@hotmaiol.com')).toBeTruthy();
  expect(validacoes.isEmail('@hotmaiol.com')).toBeFalsy();
  expect(validacoes.isEmail('rsmonte@.com')).toBeFalsy();
  expect(validacoes.isEmail('rsmonte@hotmaiol')).toBeFalsy();
});

test('isPhone',() => {
  expect(validacoes.isPhone('1832652593')).toBeTruthy();
  expect(validacoes.isPhone('(18)3265-2593')).toBeTruthy();
  expect(validacoes.isPhone('(18)32652593')).toBeTruthy();
  expect(validacoes.isPhone('132652593')).toBeFalsy();
  expect(validacoes.isPhone('12652593')).toBeFalsy();
  expect(validacoes.isPhone('(18)99635-2885')).toBeTruthy();
  expect(validacoes.isPhone('(18)996352885')).toBeTruthy();
  expect(validacoes.isPhone('123321321')).toBeFalsy();

});
