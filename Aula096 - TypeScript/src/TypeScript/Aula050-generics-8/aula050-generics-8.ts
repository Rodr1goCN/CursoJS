// Record
const objeto1: Record<string, string | number> = {
  nome: 'Rodrigo',
  sobrenome: 'Costa',
  idade: 38,
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

//Required - transforma em requerido (não opcional)
type PessoaRequired = Required<PessoaProtocol>;

// Partial - Transforma tudo em opcional
type PessoaPartial = Partial<PessoaRequired>;

// Readonly - Transforma em Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

// Pick - Só mostra o que definir
type PessoaPick = Pick<PessoaProtocol, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Rodrigo',
  sobrenome: 'Costa',
  idade: 38,
};
console.log(objeto2);

// Extract e Exclude
// Exclude - Exclui os tipos iguais que estão em outro grupo, ficando só os 'originais'
// Extract - Mostra só os que estçao no mesmo grupo, ex.: grupo-(abc) grupo-(cde) - saída 'C'
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; // Saída A e B
type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  nome: string;
  sobrenome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & { id: string };

const accountMongo: AccountMongo = {
  _id: 'adifad9adf6adfad87',
  nome: 'Rodrigo',
  sobrenome: 'Cosata',
  idade: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API');
console.log(accountApi);

// Module Mode
export default 1;
