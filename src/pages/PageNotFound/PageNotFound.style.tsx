import { Box, styled } from '@mui/material';

export const CenteredPageNotFoundWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: calc(100vh - 76vh);
`;

export const PageNotFoundWrapper = styled(Box)`
  width: 100%;
  text-align: center;

  p {
    color: #cfd2e4;
    margin-top: 7px;
  }

  img {
    width: 200px;
  }
`;
