export const printEuro = value => (value/100).toLocaleString("pt-PT", { style:"currency", currency:"EUR" });
