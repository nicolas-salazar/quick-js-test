const contactsBook = [
  {
    name: 'Nicolás',
    email: 'nicolas@mail.com',
    contacts: [
      {
        name: 'Nathaly',
        email: 'nathaly@mail.com',
        contacts: [
          {
            name: 'Sofia',
            email: 'sofia@mail.com',
          },
          {
            name: 'Richard',
            email: 'richard@mail.com',
          }
        ]
      },
      {
        name: 'Valeria',
        email: 'valeria@mail.com',
        contacts: [
          {
            name: 'Josué',
            email: 'josue@mail.com',
            contacts: [
              {
                name: 'Isaac',
                email: 'isaac@themail.com',
              }
            ]
          }
        ]
      },
    ]
  }
];

const getMails = (book) => {
  let mails = [];
  for (let i = 0; i < book.length; i++) {
    const contact = book[i];
    if (contact.email) {
      mails.push(contact.email);
    }

    if (contact.contacts && contact.contacts.length >= 0) {
      const childMails = getMails(contact.contacts);
      mails.push(...childMails);
    }
  }

  return mails;
}

console.log(getMails(contactsBook));
