

const cartCount = ()=>{
    axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099').then((res) => {
        const productid=(res.data[0].table_menu_list[0].category_dishes)
        console.log(productid.dish_id);
})
}