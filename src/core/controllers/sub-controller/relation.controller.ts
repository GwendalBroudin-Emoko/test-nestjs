import { Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { CrudQuery, ICrudQuery } from 'nestjs-mongoose-crud/dist/crud-query.decorator';
import { CrudController } from 'nestjs-mongoose-crud/dist/crud.controller';

export abstract class RelationController<ModelType> extends CrudController {

  abstract subRouteWhereFilter(parentId: string): Partial<ModelType>;
  abstract mutateModel(parentId: string): Partial<ModelType>;

  protected getRouteFilter(parentId: string, query?: ICrudQuery): ICrudQuery{
    return {
      ...query,
      where: {
        $and: [
          query?.where ?? {},
          this.subRouteWhereFilter(parentId)
        ]
      }
    }
  }

  @Get()
  @ApiOperation({ summary: "Find a record" })
  @ApiParam({
    name: 'parentId'
  })
  @ApiQuery({
    name: "query",
    type: String,
    required: false,
    description: "Query options"
  })
  override find(@Param('parentId') parentId, @CrudQuery('query') query?: ICrudQuery): Promise<any[] | {
    [x: string]: number | any[];
  }> {
    const filter = this.getRouteFilter(parentId, query);
    console.log(filter);
    return super.find(filter);
  }

}
