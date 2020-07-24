class Validacos
{
    static isEmail(email:string):boolean
    {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
    }
    static isPhone(phone:string):boolean
    {
        return /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/.test(phone);
    }
    static isCPF(cpf:string){
        var soma = 0;
        var resto;
        var i;
        if(cpf == '00000000000') return false;
        for(i=1; i<=9; i++) 
            soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;

        if((resto == 10) || (resto == 11)) 
            resto = 0;
        if(resto != parseInt(cpf.substring(9, 10))) 
            return false;

        soma = 0;
        for(i = 1; i <= 10; i++) 
            soma = soma + parseInt(cpf.substring(i-1, i))*(12-i);
        resto = (soma * 10) % 11;

        if((resto == 10) || (resto == 11)) 
            resto = 0;
        if(resto != parseInt(cpf.substring(10, 11))) 
            return false;
        return true;
    }
    static menor18Anos(birthDate:Date)
    {
        return new Date(birthDate.getFullYear()+18, birthDate.getMonth()-1, birthDate.getDate()) <= new Date();
    }

}

export default Validacos;

//
