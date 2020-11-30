let phones = document.getElementById('phone-container');
let models = phones.getElementsByClassName('model');

for(let i=0; i<models.length; i++)
{
    console.log(models[i].textContent);
}