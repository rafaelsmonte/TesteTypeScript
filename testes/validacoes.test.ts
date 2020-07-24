import validacoes from '../src/services/Validacoes'
test('isCPF', () => {
  expect(validacoes.isCPF('36801792865')).toBeTruthy();
  expect(validacoes.isCPF('11111111111')).toBeFalsy();
});