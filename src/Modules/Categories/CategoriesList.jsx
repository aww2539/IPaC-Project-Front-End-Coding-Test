

export const CategoriesList = ({ categories }) => {
    console.log(categories.length && 'Categories List Prop')

    return (
        <>
            {categories?.map(c => (
                <li key={c.sid.id}>
                    <strong>Name:</strong> {c.name}
                </li>
            ))}
        </>

    )
}