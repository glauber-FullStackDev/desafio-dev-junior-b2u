const useCrud = ({ entity }) => {
  const create = () => console.log(`create ${entity} ${i}`);
  const retrieve = () => console.log(`retrieve ${entity} ${i}`);
  const update = () => console.log(`update ${entity} ${i}`);
  const remove = () => console.log(`remove ${entity} ${i}`);

  return {
    create,
    retrieve,
    update,
    remove,
  };
};

export default useCRUD;
