import styled from 'styled-components';

export const FileUploaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white };
`;

export const Input = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

export const InputLabel = styled.label`
  background-color: ${({ theme }) => theme.colors.biscay };
  color: ${({ theme }) => theme.colors.white };
  padding: 10px 24px;
  border-radius: 5px;
  margin-left: 20px;
  cursor: pointer;
`