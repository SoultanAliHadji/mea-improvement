"""membuat table dosen

Revision ID: 1afbcd1ba58d
Revises: 2fd34a29b4fb
Create Date: 2022-10-24 11:24:40.563322

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1afbcd1ba58d'
down_revision = '2fd34a29b4fb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('dosen',
    sa.Column('id', sa.BigInteger(), autoincrement=True, nullable=False),
    sa.Column('nidn', sa.String(length=30), nullable=False),
    sa.Column('nama', sa.String(length=50), nullable=False),
    sa.Column('phone', sa.String(length=13), nullable=False),
    sa.Column('alamat', sa.String(length=100), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('dosen')
    # ### end Alembic commands ###
