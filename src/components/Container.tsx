export const Container = ({ img, form }: any) => {
  return (
    <>
      <div className="flex w-auto m-20 rounded-3xl overflow-hidden">
        <div className="w-2/4 rounded-full">
          {img}
        </div>
        <div className="w-2/4  h-auto border-1  border-black">
          {form}
        </div>
      </div>
    </>
  );
};
