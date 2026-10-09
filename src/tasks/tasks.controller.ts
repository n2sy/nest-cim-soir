import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { TasksService } from './tasks.service.js';

@Controller('tasks')
export class TasksController {
  //constructor(private taskSer: TasksService) {}
  @Inject(TasksService) taskSer;

  @Get('all')
  getAllTasks() {
    let res = this.taskSer.getAllTasks();
    return { tabTasks: res };
  }

  @Get('stats')
  nbreTask(
    @Query('year1', ParseIntPipe) y1,
    @Query('year2', ParseIntPipe) y2,
  ) {
    console.log(typeof y1, typeof y2);
    let res = this.taskSer.getNbTasks(y1, y2);
    return { message: `Le nombre de tâches entre ${y1} et ${y2} est : ${res}` };
  }

  @Get('search/:taskId')
  getTaskById(@Param('taskId') taskId: any) {
    let res = this.taskSer.getTaskById(taskId);
    if (!res) {
      throw new NotFoundException(`Task Inexistant`);
    }
    return { message: 'Task found', task: res };
  }

  @Post('add')
  addNewTask(@Body() corps: any) {
    let res = this.taskSer.addNewTask(corps);
    return { message: 'Task added successfully', tasks: res };
  }

  @Put('edit/:id')
  updateTask(@Param('id') taskId, @Body() corps) {
    let res = this.taskSer.updateTask(taskId, corps);
    return { message: 'Task updated successfully', tasks: res };
  }

  @Delete('delete/:deleteId')
  deleteTask(@Param('deleteId') taskId) {
    let res = this.taskSer.deleteTask(taskId);
    return { message: 'Task deleted successfully', tasks: res };
  }
}
