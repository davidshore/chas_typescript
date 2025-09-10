interface Address {
  street: string;
  zip: number;
}

interface Company {
  name: string;
  address: Address;
}

type CopanyName = Company["name"];
type CopanyZip = Company["address"]["zip"];
