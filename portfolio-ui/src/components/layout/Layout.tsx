import { Grid } from '@mui/material';

interface ILayoutProps {
  page: JSX.Element;
}

const Layout = ({ page }: ILayoutProps) => {
  return (
    <Grid
      style={{
        margin: '0 auto 0 auto',
        padding: '24px',
        width: '100%',
        maxWidth: '1200px',
        height: '100%',
        alignItems: 'center',
        color: '#213547',
        fontFamily: 'Helvetica',
      }}
      container
      spacing={2}
    >
      {page}
    </Grid>
  );
};
// const Layout = ({ sidebar, page }: ILayoutProps) => {
//   return (
//     <div
//       style={{
//         display: 'grid',
//         gridTemplateRows: 'auto 1fr',
//       }}
//     >
//       <Navbar />
//       {/* {sidebar !== undefined ? (
//         <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr' }}>
//           <div>{sidebar}</div>
//           <div>{page}</div>
//         </div>
//       ) : ( */}
//       <div>{page}</div>
//       {/* )} */}
//     </div>
//   );
// };

export default Layout;
