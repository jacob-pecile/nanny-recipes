import * as React from 'react';
import ReactTable, { Column, RowInfo } from 'react-table';
import styled from 'styled-components';

interface IngredientTableProps {
    data: any[];
    columns: Column[];
    className?: string;
}

const IngredientsTable = (props: IngredientTableProps) => {
    let {
        data,
        columns
    } = props;

    return (
        <ReactTable
            data={data === null ? [] : data}
            columns={columns}
            resizable={false}
            minRows={0}
            showPagination={false}
            className={props.className}
        />
    );
};

export default styled(IngredientsTable)`
	width: 100%;
	border: none;

	& > .rt-noData {
		display: none;
	}

	& .rt-thead.-header {
		box-shadow: none;
		background-color: #f2f5f7;
		font-weight: bold;
		border-bottom: 2px solid #d6d6d6;

		& > .rt-tr {
			text-align: left;

			& > .rt-th {
				height: 60px;
				display: flex;
				align-items: center;

				&.icon-cell {
					cursor: pointer;
					& > div {
						margin-left: auto;
						margin-right: auto;
						padding-top: 4px;
					}

					& .icon-cell.active {
						width: 28px;
						height: 28px;
						border-radius: 50%;
						background-color: #fb8f04;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}

				&:not(.icon-cell) {
					padding-left: 14px;

					& > div {
						width: 100%;

						& > div {
							display: flex;
							align-items: center;
							justify-content: space-between;
						}
					}
				}

				& .sort-arrow {
					display: none;
				}

				&.-sort-asc {
					box-shadow: none;

					& .sort-arrow.asc {
						display: inline-block;
					}
				}

				&.-sort-desc {
					box-shadow: none;

					& .sort-arrow.desc {
						display: inline-block;
					}
				}
			}

			& svg {
				height: 24px;
				width: 24px;
			}
		}
	}

	& .rt-tbody {
		& .rt-tr-group {
			border-bottom: 1px solid #d6d6d6;
		}

		& .rt-tr {
			&.-odd {
				background-color: #ffffff;
			}

			&.-even {
				background-color: #f2f5f7;
			}

			&.danger-row {
				background-color: #f9e7f1;
				position: relative;

				&:after {
					content: '';
					height: 100%;
					width: 4px;
					position: absolute;
					left: 0px;
					background-color: #d30e8b;
				}
			}

			&.warning-row {
				background-color: #fff1d9;
				position: relative;

				&:after {
					content: '';
					height: 100%;
					width: 4px;
					position: absolute;
					left: 0px;
					background-color: #de7426;
				}
			}

			& svg {
				height: 22px;
				width: 22px;
				cursor: pointer;
			}

			& > .rt-td {
				height: 60px;
				align-items: center;
				display: flex;

				&:not(.icon-cell) {
					padding-left: 14px;
				}

				& > div {
					display: flex;
					align-items: center;
					width: 100%;
				}

				&.icon-cell > div {
					justify-content: center;
				}

				& .edit-btn {
					text-decoration: underline;
					color: #0a6fb3;
					cursor: pointer;
				}
				& .delete-row {
					cursor: pointer;
				}
			}
		}
	}
`;
