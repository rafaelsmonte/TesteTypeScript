import validacoes from '../src/services/Validacoes'
test('isCPF', () => {
  expect(validacoes.isCPF('36801792865')).toBeTruthy();
  //expect(validacoes.isCPF('11111111111')).toBeFalsy();
  expect(validacoes.isCPF('123')).toBeFalsy();
  //expect(validacoes.isCPF('22222222222')).toBeFalsy();
});

test('menor18Anos', () => {
  expect(validacoes.maior18Anos(new Date('2000-07-25'))).toBeTruthy();
  expect(validacoes.maior18Anos(new Date('2001-07-25'))).toBeTruthy();
  expect(validacoes.maior18Anos(new Date('2001-07-25'))).toBeTruthy();
  expect(validacoes.maior18Anos(new Date('2001-07-25'))).toBeTruthy();
  expect(validacoes.maior18Anos(new Date('2002-07-26'))).toBeFalsy();
  expect(validacoes.maior18Anos(new Date('2010-07-25'))).toBeFalsy();
  expect(validacoes.maior18Anos(new Date('2013-07-25'))).toBeFalsy();
  expect(validacoes.maior18Anos(new Date('2015-07-25'))).toBeFalsy();
});
